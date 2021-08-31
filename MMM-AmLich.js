Module.register("MMM-AmLich",{
	defaults: {
        size: 'small'
	},
    
	getScripts: function() {
		return [
			this.file('AmLich.js')
		]
	},
	
	getStyles: function() {
		return [
			this.file('MMM-AmLich.css')
		]
	},

	getDom: function() {
		var wrapper = document.createElement("div");
        if (this.config.size == 'big' || this.config.size == '') {
            wrapper.innerHTML = printData();
        } else if (this.config.size == 'medium') {
            wrapper.innerHTML = printDataMedium();
        } else if (this.config.size == 'small') {
            wrapper.innerHTML = printDataSmall();
        }
		return wrapper;
	}
	
});
