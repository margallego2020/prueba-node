
const mapArray = (array) =>
{
    array.reduce( (total, current) => {
        const prev = total[current.param] || [];
        return {
            [current.param]: current,
            ...total,
            
        };
    }, {} );

    module.exports = mapArray;
}