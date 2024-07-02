let users = {};
for (let i = 1; i <= 10; i++) {
    const id = i;
    let foydalanuvchi = id;
    let ism = prompt(`${i} foydalanuvchi ismini kiriting`);
    let yosh = prompt(`${i} foydalanuvchi Yoshini kiriting`);
    users[foydalanuvchi] = {
        id: foydalanuvchi,
        name: ism,
        age: yosh
    };
}
for (const keys in users) {
    console.log(`ID: ${users[keys].id}, Ismi: ${users[keys].name}, Yoshi: ${users[keys].age}`);
};