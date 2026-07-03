const SHOPS_JSON_URL = 'https://football-connection.jp/data/shops.json';

const FC_CONFIG = {
  shopsJsonUrl: SHOPS_JSON_URL,
  shopSheetName: '店舗一覧',
  connectionSheetName: '関係者一覧',
  scheduleSheetName: '投稿予定',
  dmSheetName: 'DM管理',
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 投稿管理')
    .addItem('HPから店舗一覧を取り込む', 'importStoresFromJson')
    .addItem('店舗一覧取込', 'importStoresFromJson')
    .addItem('店舗JSON接続テスト', 'testShopsJsonConnection')
    .addSeparator()
    .addItem('投稿予定を生成', 'generatePostSchedulesFromShops')
    .addItem('DM文面を生成', 'generateDmMessagesWithRelatedShops')
    .addSeparator()
    .addItem('シートを初期設定', 'setupFootballConnectionManager')
    .addToUi();
}

const FC_SHOP_HEADERS = [
  '店舗ID',
  '店舗名',
  'カテゴリ',
  'エリア',
  '都道府県',
  'プラン',
  '説明',
  '特徴',
  'URL',
  'Instagram',
  'X',
  'ステータス',
];

const FC_CONNECTION_HEADERS = [
  '店舗ID',
  '店舗名',
  '関係者名',
  '関係性',
  '出身学校',
  '所属チーム',
  '競技カテゴリ',
  '世代・卒年',
  'ポジション',
  '掲載許可',
  '備考',
];

const FC_POST_HEADERS = [
  '投稿予定日',
  '投稿タイプ',
  '対象店舗',
  '投稿文',
  'ステータス',
  '投稿先URL',
  'メモ',
  '作成日',
];

const FC_DM_HEADERS = [
  '送信先名',
  'SNS',
  'アカウントURL',
  '目的',
  'ステータス',
  '送信日',
  '返信日',
  'メモ',
  '出身学校',
  '所属チーム',
  '関連店舗',
  'DM文面',
];

function setupFootballConnectionManager() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ensureSheet_(ss, FC_CONFIG.shopSheetName, FC_SHOP_HEADERS);
  ensureSheet_(ss, FC_CONFIG.connectionSheetName, FC_CONNECTION_HEADERS);
  ensureSheet_(ss, FC_CONFIG.scheduleSheetName, FC_POST_HEADERS);
  ensureSheet_(ss, FC_CONFIG.dmSheetName, FC_DM_HEADERS);
}

function importStoresFromJson() {
  try {
    setupFootballConnectionManager();

    const response = UrlFetchApp.fetch(SHOPS_JSON_URL, {
      method: 'get',
      muteHttpExceptions: true,
    });
    const statusCode = response.getResponseCode();
    const body = response.getContentText('UTF-8');
    if (statusCode < 200 || statusCode >= 300) {
      throw new Error('店舗一覧JSONを取得できませんでした: HTTP ' + statusCode + '\nURL: ' + SHOPS_JSON_URL + '\n本文: ' + body.slice(0, 200));
    }

    const payload = JSON.parse(body);
    const shops = normalizeShopPayload_(payload).filter(isPublishedShop_);
    if (!shops.length) {
      throw new Error('店舗一覧JSONは取得できましたが、掲載中の店舗が0件でした。JSONのstatusを確認してください。');
    }

    writeShopRows_(shops);
    writeConnectionRows_(shops);

    const result = {
      shops: shops.length,
      connections: shops.reduce((count, shop) => count + normalizeConnections_(shop).length, 0),
    };

    SpreadsheetApp.getUi().alert(
      'HPから店舗一覧を取り込みました。\n\n店舗件数: '
      + result.shops
      + '件\n関係者件数: '
      + result.connections
      + '件'
    );

    return result;
  } catch (error) {
    SpreadsheetApp.getUi().alert('店舗一覧の取り込みに失敗しました。\n\n' + error.message);
    throw error;
  }
}

function importShopsJsonFromHp() {
  return importStoresFromJson();
}

function importStoreListFromJson() {
  return importStoresFromJson();
}

function importShopListFromJson() {
  return importStoresFromJson();
}

function testShopsJsonConnection() {
  try {
    const response = UrlFetchApp.fetch(SHOPS_JSON_URL, {
      method: 'get',
      muteHttpExceptions: true,
    });
    const statusCode = response.getResponseCode();
    const body = response.getContentText('UTF-8');
    if (statusCode < 200 || statusCode >= 300) {
      SpreadsheetApp.getUi().alert('店舗JSONに接続できませんでした。\n\nHTTP ' + statusCode + '\nURL: ' + SHOPS_JSON_URL + '\n本文: ' + body.slice(0, 200));
      return;
    }

    const payload = JSON.parse(body);
    const shops = normalizeShopPayload_(payload).filter(isPublishedShop_);
    const connectionCount = shops.reduce((count, shop) => count + normalizeConnections_(shop).length, 0);
    SpreadsheetApp.getUi().alert('店舗JSONに接続できました。\n\n店舗件数: ' + shops.length + '件\n関係者件数: ' + connectionCount + '件');
  } catch (error) {
    SpreadsheetApp.getUi().alert('店舗JSON接続テストに失敗しました。\n\n' + error.message);
    throw error;
  }
}

function generatePostSchedulesFromShops() {
  setupFootballConnectionManager();

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const shops = readObjects_(ss.getSheetByName(FC_CONFIG.shopSheetName)).filter(isPublishedShopRow_);
  const connectionsByShopId = groupConnectionsByShopId_(
    readObjects_(ss.getSheetByName(FC_CONFIG.connectionSheetName))
  );
  const rows = shops.map((shop) => {
    const connections = connectionsByShopId[shop['店舗ID']] || [];
    const connectionText = buildConnectionText_(connections);
    const postText = buildPostText_(shop, connectionText);

    return {
      '投稿予定日': '',
      '投稿タイプ': '店舗紹介',
      '対象店舗': shop['店舗名'],
      '投稿文': postText,
      'ステータス': '下書き',
      '投稿先URL': shop['URL'] || '',
      'メモ': connectionText,
      '作成日': new Date(),
    };
  });

  writeObjects_(ss.getSheetByName(FC_CONFIG.scheduleSheetName), FC_POST_HEADERS, rows);
}

function generateDmMessagesWithRelatedShops() {
  setupFootballConnectionManager();

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dmSheet = ss.getSheetByName(FC_CONFIG.dmSheetName);
  const shopsById = indexBy_(
    readObjects_(ss.getSheetByName(FC_CONFIG.shopSheetName)),
    '店舗ID'
  );
  const recipients = readObjects_(dmSheet);
  const connections = readObjects_(ss.getSheetByName(FC_CONFIG.connectionSheetName));
  const updatedRecipients = recipients.map((recipient) => {
    const relatedShops = findRelatedShops_(recipient, connections, shopsById);
    const relatedShopNames = relatedShops.map((shop) => shop['店舗名']).filter(Boolean).join('、');

    return Object.assign({}, recipient, {
      '関連店舗': relatedShopNames,
      'DM文面': buildDmText_(recipient, relatedShops),
    });
  });

  writeObjects_(dmSheet, FC_DM_HEADERS, updatedRecipients);
}

function writeShopRows_(shops) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rows = shops.map((shop) => ({
    '店舗ID': shop.id || '',
    '店舗名': shop.name || '',
    'カテゴリ': shop.category || '',
    'エリア': shop.area || '',
    '都道府県': shop.prefecture || '',
    'プラン': shop.plan || '',
    '説明': shop.description || '',
    '特徴': shop.feature || '',
    'URL': shop.url || '',
    'Instagram': shop.instagram || '',
    'X': shop.x || '',
    'ステータス': shop.status || 'published',
  }));

  replaceObjects_(ss.getSheetByName(FC_CONFIG.shopSheetName), FC_SHOP_HEADERS, rows);
}

function writeConnectionRows_(shops) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rows = [];

  shops.forEach((shop) => {
    normalizeConnections_(shop).forEach((connection) => {
      rows.push({
        '店舗ID': shop.id || '',
        '店舗名': shop.name || '',
        '関係者名': pick_(connection, ['name', 'personName', '関係者名']),
        '関係性': pick_(connection, ['role', 'relationship', 'relation', '関係性']),
        '出身学校': pick_(connection, ['school', 'almaMater', '出身学校']),
        '所属チーム': pick_(connection, ['team', '所属チーム']),
        '競技カテゴリ': pick_(connection, ['sport', 'sportCategory', 'category', '競技カテゴリ']),
        '世代・卒年': pick_(connection, ['generation', 'graduationYear', '世代・卒年']),
        'ポジション': pick_(connection, ['position', 'ポジション']),
        '掲載許可': permissionLabel_(connection),
        '備考': pick_(connection, ['note', 'memo', '備考']),
      });
    });
  });

  replaceObjects_(ss.getSheetByName(FC_CONFIG.connectionSheetName), FC_CONNECTION_HEADERS, rows);
}

function normalizeShopPayload_(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.shops)) return payload.shops;
  return [];
}

function normalizeConnections_(shop) {
  if (!shop || !Array.isArray(shop.connections)) return [];
  return shop.connections.filter((connection) => !isPublishDenied_(connection));
}

function isPublishedShop_(shop) {
  const status = String(shop.status || 'published').toLowerCase();
  return ['published', 'active', 'listed', '掲載中', '公開'].indexOf(status) !== -1;
}

function isPublishedShopRow_(shop) {
  const status = String(shop['ステータス'] || 'published').toLowerCase();
  return ['published', 'active', 'listed', '掲載中', '公開'].indexOf(status) !== -1;
}

function isPublishDenied_(connection) {
  const value = pick_(connection, ['publishAllowed', 'permission', 'listingPermission', '掲載許可']);
  return ['false', 'ng', '不可', '不許可', 'no'].indexOf(String(value).toLowerCase()) !== -1;
}

function permissionLabel_(connection) {
  const value = pick_(connection, ['publishAllowed', 'permission', 'listingPermission', '掲載許可']);
  if (value === true) return 'OK';
  if (value === false) return 'NG';
  if (!value) return '未設定';
  return String(value);
}

function buildConnectionText_(connections) {
  if (!connections.length) return '';

  const primary = connections[0];
  const personName = primary['関係者名'];
  const sportName = sportDisplayName_(primary['競技カテゴリ']);
  const context = buildSchoolTeamText_(primary);
  const communityName = communityDisplayName_(primary['競技カテゴリ']);
  const roleText = roleActionText_(primary['関係性']);
  const multipleText = connections.length > 1
    ? 'ほかにも同じフットボールコミュニティの関係者が関わっています。'
    : '';

  if (personName) {
    return [
      context ? context + 'ゆかりの' : '',
      personDisplayName_(personName) + 'が' + roleText + '、' + communityName + 'のお店です。',
      multipleText,
    ].filter(Boolean).join('');
  }

  return [
    context ? context + 'ゆかりの' : '',
    communityName + 'のお店です。',
    sportName && !context ? sportName + 'に関わる方にも紹介しやすい一軒です。' : '',
    multipleText,
  ].filter(Boolean).join('');
}

function buildPostText_(shop, connectionText) {
  const lines = [
    '【FOOTBALL Connection 掲載店紹介】',
    shop['店舗名'] || '',
    shop['特徴'] || 'アメフト・フラッグフットボールにゆかりのある店舗です。',
    connectionText,
    shop['説明'] || '',
    'アメフト・フラッグ関係者の集まり、OB/OG会、チームの食事や差し入れ先としてぜひチェックしてください。',
    shop['URL'] || '',
  ];

  return lines.filter(Boolean).join('\n');
}

function findRelatedShops_(recipient, connections, shopsById) {
  const recipientSchool = normalizeText_(recipient['出身学校']);
  const recipientTeam = normalizeText_(recipient['所属チーム']);
  if (!recipientSchool && !recipientTeam) return [];

  const matchedShopIds = connections
    .filter((connection) => {
      const school = normalizeText_(connection['出身学校']);
      const team = normalizeText_(connection['所属チーム']);
      return (recipientSchool && school && school === recipientSchool)
        || (recipientTeam && team && team === recipientTeam);
    })
    .map((connection) => connection['店舗ID'])
    .filter(Boolean);

  return unique_(matchedShopIds).map((id) => shopsById[id]).filter(Boolean);
}

function buildDmText_(recipient, relatedShops) {
  const name = recipient['送信先名'] || 'ご担当者';
  const schoolOrTeam = [recipient['出身学校'], recipient['所属チーム']].filter(Boolean).join('・');
  const relatedShopNames = relatedShops.map((shop) => shop['店舗名']).filter(Boolean);
  const visibleShopNames = relatedShopNames.slice(0, 3).join('、');
  const relatedText = relatedShopNames.length && schoolOrTeam
    ? 'FOOTBALL Connectionには、' + schoolOrTeam + 'にゆかりのある店舗として、' + visibleShopNames + (relatedShopNames.length > 3 ? 'など' : '') + 'も掲載されています。'
    : '';
  const introText = schoolOrTeam
    ? schoolOrTeam + 'に関わる方にも知っていただきたく、ご連絡しました。'
    : 'アメフト・フラッグフットボールに関わる方へご案内したく、ご連絡しました。';

  return [
    name + 'さま',
    '突然のご連絡失礼します。FOOTBALL Connection運営です。',
    introText,
    relatedText,
    'アメフト・フラッグフットボールに関わる方のお店や活動を紹介する取り組みを進めています。',
    'ご興味があれば、掲載やご紹介について一度ご相談させてください。',
  ].filter(Boolean).join('\n');
}

function buildSchoolTeamText_(connection) {
  return [connection['出身学校'], connection['所属チーム']].filter(Boolean).join('・');
}

function personDisplayName_(personName) {
  if (!personName) return '';
  const text = String(personName);
  if (text.endsWith('さん') || text.endsWith('氏') || text.endsWith('様')) return text;
  return text + 'さん';
}

function roleActionText_(role) {
  if (!role) return '関わる';
  const text = String(role);
  if (text.endsWith('する') || text.indexOf('関わ') !== -1) {
    return text;
  }
  if (text.indexOf('参画') !== -1) return text + 'する';
  if (text.indexOf('として') !== -1) return text + '関わる';
  return text + 'として関わる';
}

function sportDisplayName_(sport) {
  if (sport === 'アメリカンフットボール') return 'アメフト';
  if (sport === 'アメフト／フラッグ') return 'アメフト・フラッグ';
  return sport || '';
}

function communityDisplayName_(sport) {
  const displayName = sportDisplayName_(sport);
  if (displayName === 'アメフト・フラッグ') return 'アメフト・フラッグ関係者';
  if (displayName === 'フラッグフットボール') return 'フラッグ関係者';
  return 'アメフト関係者';
}

function ensureSheet_(ss, name, requiredHeaders) {
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  ensureHeaders_(sheet, requiredHeaders);
  return sheet;
}

function ensureHeaders_(sheet, requiredHeaders) {
  const existingHeaders = getHeaders_(sheet);
  if (!existingHeaders.length) {
    sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
    sheet.setFrozenRows(1);
    return requiredHeaders;
  }

  const missingHeaders = requiredHeaders.filter((header) => existingHeaders.indexOf(header) === -1);
  if (missingHeaders.length) {
    sheet.getRange(1, existingHeaders.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
  sheet.setFrozenRows(1);
  return getHeaders_(sheet);
}

function writeObjects_(sheet, requiredHeaders, objects) {
  const headers = ensureHeaders_(sheet, requiredHeaders);
  const lastRow = Math.max(sheet.getLastRow(), 1);
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clearContent();
  }
  if (!objects.length) return;

  const values = objects.map((object) => headers.map((header) => object[header] || ''));
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}

function replaceObjects_(sheet, requiredHeaders, objects) {
  sheet.clearContents();
  sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
  sheet.setFrozenRows(1);
  if (!objects.length) return;

  const values = objects.map((object) => requiredHeaders.map((header) => object[header] || ''));
  sheet.getRange(2, 1, values.length, requiredHeaders.length).setValues(values);
}

function readObjects_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const headers = getHeaders_(sheet);
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  return values
    .filter((row) => row.some((cell) => cell !== ''))
    .map((row) => {
      const object = {};
      headers.forEach((header, index) => {
        object[header] = row[index];
      });
      return object;
    });
}

function getHeaders_(sheet) {
  if (!sheet || sheet.getLastColumn() === 0) return [];
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(Boolean);
}

function groupConnectionsByShopId_(connections) {
  return connections.reduce((groups, connection) => {
    const shopId = connection['店舗ID'];
    if (!shopId) return groups;
    groups[shopId] = groups[shopId] || [];
    groups[shopId].push(connection);
    return groups;
  }, {});
}

function indexBy_(rows, key) {
  return rows.reduce((index, row) => {
    if (row[key]) index[row[key]] = row;
    return index;
  }, {});
}

function pick_(object, keys) {
  for (const key of keys) {
    if (object && object[key] !== undefined && object[key] !== null && object[key] !== '') {
      return object[key];
    }
  }
  return '';
}

function normalizeText_(value) {
  return String(value || '').trim().toLowerCase();
}

function unique_(values) {
  return Array.from(new Set(values));
}
