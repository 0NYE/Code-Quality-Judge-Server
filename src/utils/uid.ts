import * as a from "uuid4";

export const uuid = () => a.default();

export const uuidWithoutHyphen = () => a.default().split("-").join('');
