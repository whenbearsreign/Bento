// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Robin & Theta',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Morning,',
	greetingAfternoon: 'Afternoon,',
	greetingEvening: 'Evening,',
	greetingNight: 'Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '24f6af360c8e44107fb13600dc613abd', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '42.039570',
	defaultLongitude: '-88.283974',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/1/#inbox',
		},
		{
			id: '3',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '4',
			name: 'Code',
			icon: 'code',
			link: 'https://code.hirob.in/',
		},
		{
			id: '5',
			name: 'Mastodon',
			icon: 'smile',
			link: 'https://mastodon.lol/web/home',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'OneNote',
					link: 'https://www.onenote.com/notebooks?wdorigin=+ondchrd&auth=1&nf=1&fromAR=1',
				},
				{
					name: 'Clock-In!',
					link: 'https://etime.elgin.edu/workforce/Dashboard.do?csrfToken=1A1634950681730A1090906167&action=start',
				},
				{
					name: 'SysAid',
					link: 'https://elgin.sysaidit.com/HelpDesk.jsp?fromId=List',
				},
				{
					name: 'JAMF Dashboard',
					link: 'https://casperjss9:8443/index.html',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'PluralSight',
					link: 'https://app.pluralsight.com/library/',
				},
				{
					name: 'Tech Mail',
					link: 'https://webmail.elgin.edu/owa/#path=/mail',
				},
				{
					name: 'Microsoft Office',
					link: 'https://www.office.com/?home=1&auth=2',
				},
				{
					name: 'accessECC Portal',
					link: 'https://portal.elgin.edu/employee/Pages/default.aspx',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
