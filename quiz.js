/**
 * The quiz class can take an abritary length of questions with answers that gives different points.
 * It also times answers and provides the results ad hoc.
 * 
 * @author dotnetCarpenter
 * @version 0.1
 * @classDescription This class creates a new Quiz.
 * @return {Quiz} Returns a new Quiz.
 * @type {Object}
 */
var Quiz = function() {
    var _question = [];
    
    /**
     * @method
     * @return {Number} The index of the added question
     */
    this.addQuestion = function(question) {
        return _question.push(question);
    };
    /**
     * @method
     * @return {Object} A Question object
     */
    this.getQuestion = function(index) {
    	return _question[index];
    };
    /**
     * @method
     * @return {Array} A reference to the internal question array
     */
    this.getAllQuestion = function() {
    	return _question;
    }
    
    /* experiment */
  // this.length = Array.prototype.length.call(_question);
};

/**
 * @method
 */
Quiz.prototype.addQuestions = function(questions) {
    if( !Array.isArray(questions) ){ throw new TypeError('The arguments has to be an Array.'); }
    var index = 0
    	, self = this;
	questions.forEach(function(el, i, a) {
		Ti.API.debug(el);
	    index = self.addQuestion(el);
	    Ti.API.debug(self);
	    console.log('added question #'+i+' of '+a.length+' @ '+index);
    });
};
/**
 * @method
 * 
 */
Quiz.prototype.eachPossibility = function(questionIndex, fn) {
	//Array.prototype.forEach.call(this.getAllQuestion()[questionIndex].possibilities, fn)
	return this.getAllQuestion()[questionIndex].possibilities.forEach(fn);
}

// fix cross debug output TODO: multiple arguments to Ti debug
this.console || (this.console = {}, console.log = Ti.API.debug);
// Check if we're in a CommonJS environment
if( typeof require == 'function' && typeof module == 'object' ) {
    exports['quiz'] = Quiz;
}