// підключення модуля fs
const fs = require('fs');

// читання json файлу
fs.readFile("data.json", (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        try {

            // фільтрування даних, BS3_BanksLiab
            const jsonData = JSON.parse(data);
            const filtered = jsonData.filter(item => item.ku == BS3_BanksLiab);
            const forfile = filtered.map(item => item.value.toString());

            // вивід шуканих значень у консоль
            filtered.forEach(item => {
                console.log(item.value);
            });

            // запис шуканих значень у файл output.txt
            fs.writeFile("output.txt", forfile.join('\n'), (err) => {
                if (err)
                {
                    console.error(err);
                    return;
                }
            });

        } catch (error) {
            console.error('Помилка', error.message);
        }

    }
});