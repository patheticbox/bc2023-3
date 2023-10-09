// підключення модуля fs
const fs = require('fs');

// читання json файлу
fs.readFile("data.json", (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        try {

            // фільтрування даних BS3_BanksLiab
            const jsonData = JSON.parse(data);
            const filtered = jsonData.filter(item => item.parent == "BS3_BanksLiab");
            const forfile = filtered.map(item => item.value.toString());

            const outputText = filtered.map(item => `${item.txten}:${item.value}`).join('\n');
            
            console.log(outputText);
            
            fs.writeFile("output.txt", outputText, (err) => {
                if (err)
                {
                    console.error(err);
                    return;
                }
                filtered.forEach(item => {

                })
            });

        } catch (error) {
            console.error('Помилка', error.message);
        }

    }
});