Module.register("MMM-AmLich",{
	defaults: {
        size: 'small'
	},
    
	getScripts: function() {
		return [
			this.file('node_helper.js')
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
            wrapper.innerHTML = printToday();
        } else if (this.size.print == 'medium') {
            wrapper.innerHTML = printTodayMedium();
        } else if (this.size.print == 'small') {
            wrapper.innerHTML = printTodaySmall();
        }
		return wrapper;
	}
	
});