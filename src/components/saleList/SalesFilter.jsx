import "./saleslist.css"
const SalesFilter = ({ filterDays, setFilterDays }) => {
      return (
            <div className="sales-filter">
                  <select value={filterDays} onChange={(e) => setFilterDays(Number(e.target.value))}>
                        <option value={7}>7 days</option>
                        <option value={30}>30 days</option>
                        <option value={90}>90 days</option>
                        <option value={180}>180 days</option>
                        <option value={365}>365 days</option>
                  </select>
            </div>
      );
};

export default SalesFilter;
