const generateBtn = document.querySelector('#generateBtn');
const copyBtn = document.getElementById('copyBtn');
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const message = document.getElementById('message');

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';

    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function applyColor(){
    const randomColor = generateRandomColor();

    document.body.style.backgroundColor = randomColor;
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;

    message.textContent = "";
}

generateBtn.addEventListener('click', applyColor);

copyBtn.addEventListener('click',
    async () => {
        const color = colorCode.textContent;

        try{
            await navigator.clipboard.writeText(color);

            message.textContent = 'Color copied Successfully !!';

            setTimeout(() =>{
                message.textContent = ""
            }, 2000)
        }
        catch(error){
            message.textContent = "Failed to copy color !";
        }
    }
);

applyColor();