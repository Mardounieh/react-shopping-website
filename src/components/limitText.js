export const limitText = (data,limit) => {
  data = data.split(' ');
  if(data.length >= limit) {
      data.length = limit;
      data.push('...');
  }
  return data.join(' ')
}