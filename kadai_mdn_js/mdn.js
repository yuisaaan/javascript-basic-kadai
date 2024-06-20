const today =new Date();
const month =today.getMonth() +1;
const day =today.getDate();
const year =today.getFullYear();

const formattedDate =year +'年'　+month + '月'　+ day + '日';

console.log(formattedDate);
