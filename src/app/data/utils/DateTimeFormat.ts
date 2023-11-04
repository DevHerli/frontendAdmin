export default class DateTimeUtils {

  /**
  *ES: Convierte una fecha a una cadena en formato Día/Mes/Año. dd/("mmm")/yyyy
  *
  *EN: Converts a date into a day/month/year format string. dd/("mmm")/yyyy
  *
  * @param {Date | string} date - Date to gets converted
  *
  * @returns {string} Date converted to dd/("mmm")/yyyy format
  * ---
  * @example
  * // Input - "October 13, 2014 11:13:00"
  * // Output - "13/Oct/2014"
  *
  * @author Christian Lira 22/10/2023
  */
  public static convertTo_day_month_year(date: Date | string): string {
    if (!date) return "??";

    let tempDate = new Date(date);
    return `${tempDate.getDate()}/${this.getMonthShortName(tempDate)}/${tempDate.getFullYear()}`
  }


  private static getMonthShortName(date: Date | string): string {
    let tempDate = new Date(date);
    let month: string[] = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

    return month[tempDate.getMonth()].toUpperCase();
  }
}

