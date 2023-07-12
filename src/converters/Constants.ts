
export default class Constants {
    public static readonly SEPARATOR: string = ' ';
    public static readonly INITIALS: string[] = ['d', 'h', "'", "''", 'ms'].map((t, i) => i !== 4 ? `${t}${Constants.SEPARATOR}` : t);
    
}