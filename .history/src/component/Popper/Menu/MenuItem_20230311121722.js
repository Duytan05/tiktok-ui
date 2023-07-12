import Button from '~/component/Button';
function MenuItem({ data }) {
    return <button>{JSON.stringify(data)}</button>;
    //  <Button leftIcon={data.icon}>{data.title}</Button>;
}

export default MenuItem;
