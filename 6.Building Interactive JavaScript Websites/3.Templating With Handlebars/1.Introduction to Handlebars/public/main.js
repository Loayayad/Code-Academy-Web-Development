const source = document.getElementById('ice-cream').innerHTML;

const template = Handlebars.compile(source);

const context = {
    flavor: 'Strawberry'
};

const compiledHtml = template(context);

const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
