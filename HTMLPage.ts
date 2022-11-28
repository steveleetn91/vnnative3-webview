export default interface HTMLPageInterFace {
    render() : string | void 
    beforeRender() : void
    afterRender() : void
}