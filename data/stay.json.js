const stays = [
	{
		_id: 's101',
		name: 'Ribeira Charming Duplex',
		type: 'House',
		imgUrls: ['https://a0.muscache.com/im/pictures/8c394e3b-9c87-4c76-b635-3f93eb14e3cb.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/7a207052-5f78-4594-b71b-7b343b306b24.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/781cb8d4-4a12-4b39-96d3-bbe457dff3ba.jpg?im_w=720'],
		price: 80.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
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
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
				},
			},
		],
		likedByUsers: ['mini-user'],
	},
	{
		_id: 's102',
		name: 'Ribeira Charming Duplex',
		type: 'House',
		imgUrls: ['https://e26e9b.jpg', 'https://e26e9b.jpg', 'https://e26e9b.jpg', 'https://e26e9b.jpg', 'https://e26e9b.jpg'],
		price: 80.0,
		summary: 'Fantastic duplex apartment...',
		capacity: 8,
		amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
		labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
		host: {
			_id: 'u101',
			fullname: 'Davit Pok',
			imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
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
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
				},
			},
		],
		likedByUsers: ['mini-user'],
	}
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
		imgUrl: 'https://a0.muscache.com/im/pictures/user/User-487405339/original/27b4d92c-2c59-4458-8968-a2f0e256db8b.jpeg?im_w=240',
		username: 'user1',
		password: 'secret',
		reviews: [
			{
				id: 'madeId',
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
	{
		_id: 'u102',
		fullname: 'User 2',
		imgUrl: '/img/img2.jpg',
		username: 'user2',
		password: 'secret',
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