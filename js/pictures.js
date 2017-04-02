'use strict';

var massPhotos = [];
var i;
var likes;
var min = 15;
var max = 200;
var comments = ['Всё отлично!', 
				'В целом всё неплохо. Но не всё.',
				'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
				'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
				'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
				'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'];
var randComments = Math.floor(Math.random() * comments.length);
var pComments = comments[randComments];

for (i = 1; i <= 5; i++) {
	
	var randLikes = min + Math.floor(Math.random() * (max + 1 - min));
	massPhotos.push({url:'photos/' + i + '.jpg', likes:randLikes, comments:pComments});
	console.log(massPhotos);

}