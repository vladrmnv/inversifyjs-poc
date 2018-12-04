import { MoneyService } from "../money.service";
import { expect } from "chai";

describe('MoneyService', () => {
    it('imports',() => {
        expect(MoneyService).to.be.a('function');
    })
})