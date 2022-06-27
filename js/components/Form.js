export default function Form(val){

    return `
        <form id="form" method="POST">
            <h1>${val ? 'Calculadora de Porcentage' : 'Obtener Peso'}</h1>
            <div class="form-input">
                <label for="price">Precio</label>
                <input type="number" id="price" name="price">
            </div>
            <div class="form-input">
                <label for="${val ? 'percentage': 'oficialPrice'}">${val ? 'Porcentage': 'Valor Oficial'}</label>
                <input type="number" 
                ${val ? 'id="percentage" name="percentage"' : 'id="oficialPrice" name="oficialPrice"'} value="30">
            </div>
            <input type="submit" value="Calcular" class="button">

            <div id="total"></div>
        </form>
    `;
}