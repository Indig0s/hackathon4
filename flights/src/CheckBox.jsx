function CheckBox ({check, handleChange}) {
    return (
        <div>
            <input
            type="checkbox"
            checked={check}
            onChange={handleChange}
            />
        </div>
    )
}
export default CheckBox;