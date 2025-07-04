const extractEmail = (mailto: string) => {
    const str = mailto.trim();
    const match = str.match(/^mailto:\s*([^?#]+)/i);

    return match ? match[1] : null;
}

export default extractEmail