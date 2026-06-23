StartupEvents.registry('fluid', event => {
    event.create('molten_hardened_glass')
        .renderType('solid')
        .thinTexture(0xD3D3D3)
        .temperature(5000)
        .noBlock()
        .noBucket();
});