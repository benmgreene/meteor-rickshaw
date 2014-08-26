Package.describe({
	summary: "A Rickshaw fork repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('d3', 'client');
	api.add_files('rickshaw/rickshaw.js', 'client');
	api.add_files('rickshaw/rickshaw.css', 'client');
	  
	api.export('Rickshaw', 'client');
});
