export const getFormattedDate=(date) =>{
    const dateString = new Date(date);

    // Formatting the date
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };
    
    return dateString.toLocaleString("en-GB", options).replace(",", "");
}