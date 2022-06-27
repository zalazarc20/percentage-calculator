export default function Percentage() {
    return `
        <h1>Calculadora de Porcentage</h1>
        <div class="form-input">
            <label for="price">Precio</label>
            <input type="number" id="price" name="price">
        </div>
        <div class="form-input">
            <label for="percentage">Porcentage</label>
            <input type="number" id="percentage" name="percentage" value="30">
        </div>
        <input type="submit" value="Calcular" class="button">

        <div id="total"></div>
    `;
}