
const stays = [
	{
		_id: 's101',
		name: 'Ribeira Charming Duplex',
		type: 'House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 8000.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		info: 'A big, comfortable and nice five room apartment, fully equipped, completely renewed, located in the heart of Lisbon, Portugals historic area, at 2 minutes walking from Riberia, 7 minutes walking from Sao Bento Metro and train station.',
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u101',
			fullname: 'Davit Pok',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'Reviewer',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
			{
				id: 'madeId',
				txt: 'Very helpful hosts. Cooked traditional...',
				rate: 2.5,
				by: {
					_id: 'u103',
					fullname: 'Reviewer',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '20',
				end: '30'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's456',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's333',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's104',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's105',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's106',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's107',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's108',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's109',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's110',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's111',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's112',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's113',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's114',
		name: 'The Ribeira Charming Duplex',
		type: 'Big House',
		imgUrls: ['https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/c1db0540-adb3-496b-81d1-ccc4031934a5.jpeg?im_w=960', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/36d1fcde-5b81-421d-8332-bbc62dc3a2a9.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/bd72d62e-0538-45d1-afaa-5511a0ef50fe.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/7306a264-2ec5-4173-9acb-4fb2000f7d3c.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-19279611/original/649c067f-dd8b-4137-9f1e-24dbde36d262.jpeg?im_w=720'],
		price: 100.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u102',
			fullname: 'David Rock',
			imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
		},
		loc: {
			country: 'Portugal',
			countryCode: 'PT',
			city: 'Lisbon',
			address: '17 Kombo st',
			lat: -8.61308,
			lng: 41.1413,
		},
		reviews: [
			{
				id: 'madeId',
				txt: 'Very nice. Cooked traditional...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/9da9a054-1301-4edc-bcfb-2a8d826404e7.jpg?im_w=240',
				},
			},
		],
		availableDates: [
			{
				month: 'NOV',
				start: '11',
				end: '15'
			}
		],
		likedByUsers: ['mini-user'],
	},
]

////////////////////////////////////////////////
const orders = [
	{
		_id: 'o1225',
		hostId: { _id: 'u102', fullname: "bob", imgUrl: "..." },
		guest: {
			_id: 'u101',
			fullname: 'User 1',
		},
		totalPrice: 160,
		startDate: '2025/10/15',
		endDate: '2025/10/17',
		guests: {
			adults: 1,
			kids: 2,
		},
		stay: {
			// mini-stay
			_id: 'h102',
			name: 'House Of Uncle My',
			price: 80.0,
		},
		msgs: [], // host - guest chat
		status: 'pending', // approved / rejected
	},
]

////////////////////////////////////////////////
const users = [
	{
		_id: 'u101',
		fullname: 'User 1',
		imgUrl: 'https://a0.muscache.com/im/pictures/user/User-570074090/original/4a25a900-e452-4772-933a-d42f1f0ae551.jpeg?im_w=240',
		username: 'user1',
		password: 'secret1',
		reviews: [
			{
				id: 'madeId1',
				txt: 'Quiet guest...',
				rate: 4,
				by: {
					_id: 'u101',
					fullname: 'user1',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/User-487405339/original/27b4d92c-2c59-4458-8968-a2f0e256db8b.jpeg?im_w=240',
				},
			},
		],
	},
	{
		_id: 'u102',
		fullname: 'User 2',
		imgUrl: 'https://a0.muscache.com/im/pictures/user/User-487405339/original/27b4d92c-2c59-4458-8968-a2f0e256db8b.jpeg?im_w=240',
		username: 'user2',
		password: 'secret2',
		reviews: [
			{
				id: 'madeId2',
				txt: 'Quiet guest...',
				rate: 4,
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: 'https://a0.muscache.com/im/pictures/user/User-487405339/original/27b4d92c-2c59-4458-8968-a2f0e256db8b.jpeg?im_w=240',
				},
			},
		],
	},
]

export const data = {
	stays,
	orders,
	users
}

// Explore page:
// stayService.query({ type: 'House' })

// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123

// UserDetails
//  basic info
//  visitedStays => orderService.query({guestId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})

// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering

// Example - figuring out if the user is an owner:
// userService.login()
//  const userStays = stayService.query({ownerId: loggeinUser._id})
//  loggeinUser.isOwner = userStays.length > 0