export default function Weight(){
    return `
        <h1>Obtener Peso</h1>
        <div class="form-input">
            <label for="price">Precio</label>
            <input type="number" id="price" name="price">
        </div>
        <div class="form-input">
            <label for="valor">Valor Oficial</label>
            <input type="number" id="valor" name="valor" value="30">
        </div>
        <input type="submit" value="Calcular" class="button">

        <div id="total"></div>
    `;
}