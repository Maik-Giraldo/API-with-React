import { Subject } from "rxjs";

const $intermediary = new Subject();

const Intermediary = $intermediary.asObservable();

const changeValue = (value)=>$intermediary.next(value);

export {Intermediary, changeValue};