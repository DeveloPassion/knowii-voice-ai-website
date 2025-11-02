module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'header-max-length': [1, 'always', 100],
		'scope-enum': [
			2,
			'always',
			[
				'all',
				'a11y',
				'code',
				'deps',
				'docs',
				'i18n',
				'qa',
				'release',
				'sec',
				'ui',
				'ux',
				'build',
				'landing',
				'footer',
				'header',
				'privacy',
				'terms',
				'layout',
				'deploy'
			]
		],
		'scope-case': [2, 'always', 'lowercase']
	}
}
