export const FormatPhone = (phone) => {
  if (typeof phone === 'string') {
    const countryCode = phone.slice(0, 2);
    const DDD = phone.slice(2, 4);
    const phoneFirstDigit = phone.slice(4, 5);
    const phoneFirstHalf = phone.slice(5, 9);
    const phoneSecondHalf = phone.slice(9);

    return `+${countryCode} ${DDD} ${phoneFirstDigit} ${phoneFirstHalf}-${phoneSecondHalf}`; 
  }

  return phone;
}

export default FormatPhone;