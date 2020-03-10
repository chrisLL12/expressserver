// import nodemailer from 'nodemailer';
//
// const transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'coffeereviews9@gmail.com',
//         pass: 'fkjfkj'
//     }
// });
//
// export const sendResetEmail = ({ display_name, email, id }) => {
//     const key = await generatePasswordResetKey();
//     storePasswordResetKey(id, key);
//     await tansport.sendMail({
//         from: 'coffeereviews9@gmail.com', to: email,
//         subject: 'Password reset',
//         text: generatePasswordResetKey(display_name, key)
//     });
// };