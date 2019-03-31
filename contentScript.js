(function () {
  // Check the author's account before proceeding
  if ($('.fse_info').contents().text().indexOf('kakutora') == -1)
    return;
  var styleMapping = {
    '早希': 'color: rgb(51, 153, 153);',
    '神楽': 'color: rgb(255, 102, 0);',
    '神楽': 'color: rgb(255, 102, 0);',
    'つばめ': 'color: rgb(204, 0, 0);',
    'アーヤ': 'color: rgb(51, 51, 255);',
    'あやみ': 'color: rgb(51, 51, 255);',
    'ガブ': 'color: rgb(0, 153, 0);',
    'みやび': 'color: rgb(153, 51, 153);',
    '千羽鶴': 'color: rgb(153, 153, 153);',
    '真幌': 'color: rgb(51, 51, 51);',
    'スワロー': 'color: rgb(204, 0, 0);',
    'カレン': 'color: rgb(255, 0, 0);',
    '百鶴': 'color: rgb(153, 0, 0);',
    'エヴェレット': 'color: rgb(51, 51, 255);',
    '白烏': 'color: rgb(0, 0, 153);',
    'ぴょんこ': 'color: rgb(255, 165, 0);',
    '月神楽': 'color: rgb(153, 51, 0);',
    'マルザンナ': 'color: rgb(0, 153, 0);',
    'リヴォルカ': 'color: rgb(0, 102, 0);',
    'シンギュラリティ': 'color: rgb(153, 51, 153);',
    '四十九夜': 'color: rgb(102, 51, 102);'
  }
  var msg_content = $('.fse_message').children();

  if (window._colorized) {
    console.log('Page is already colorized');
    return;
  }

  var contents = $(msg_content[2]).contents();
  var inrange = false;
  var isPrevNewline = false;
  for (var i = 0; i < contents.length; i++) {
    var line = contents[i];
    if (contents[i].textContent.indexOf('▼') != -1) {
      $(contents[i]).wrap('<b><u></b></u>');
      continue;
    }
    var match = contents[i].textContent.trim().match(/^(.{1,10})：.*/);
    if (match == null)
      continue;
    else {
      var subject = match[1];
      if (styleMapping.hasOwnProperty(subject)) {
        $(contents[i]).wrap(`<span style="${styleMapping[subject]}"></span>`);
      } else {
        console.log(`Undefined style mapping: ${subject}`);
      }
    }
  }
  window._colorized = true;
})();