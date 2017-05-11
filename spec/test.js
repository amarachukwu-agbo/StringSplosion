'use strict';

const stringSplosion = require('../app/index.js');

describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var StringSplosion = new stringSplosion("Code");
        expect(StringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var StringSplosion = new stringSplosion("Code");
        var functionString = StringSplosion.manipulate.toString();
        expect(StringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var StringSplosion = new stringSplosion("abc");
        expect( StringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var StringSplosion = new stringSplosion("andela");
        var functionString = StringSplosion.manipulate.toString();
        expect(StringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var StringSplosion = new stringSplosion("andela");
        var functionString = StringSplosion.manipulate.toString();
        expect( StringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});