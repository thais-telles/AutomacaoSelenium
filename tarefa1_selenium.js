//Importação das bibliotecas:
const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

//Configuração do serviço do Chrome:
const service = () =>
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

//Função assíncrona run():
async function run() {
    let navigation = await new Builder().forBrowser('chrome').build();
    await navigation.get('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/pratica_1.html');

    const searchBar = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/input'));
    await searchBar.sendKeys("(11) 98888-8888");
    await searchBar.sendKeys(Key.ENTER);
}

run();