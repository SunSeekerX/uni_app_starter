export interface BaseResult<T> {
    code: Number;
    success: Boolean;
    msg: String;
    data?: T;
}
