'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GAP_HEIGHT = 20;
var GIST_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.fontStyle = FONT_SIZE + 'px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_HEIGHT, CLOUD_Y + GAP + GAP_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_HEIGHT, CLOUD_Y + GAP + GAP_HEIGHT + GAP_HEIGHT);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'hsl(240, ' + Math.random() * 100 + '% , 50% )';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - GAP_HEIGHT - (times[i] / maxTime) * GIST_HEIGHT, BAR_WIDTH, (times[i] / maxTime) * GIST_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - GAP - (times[i] / maxTime) * GIST_HEIGHT - GAP_HEIGHT);
  }
};
