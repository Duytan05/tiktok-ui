import Button from '~/component/Button';

function MenuItem({ data }) {
    return <Button>{data.title}</Button>;
}

export default MenuItem;
