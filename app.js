const cmp = document.querySelector ('.cmp');
document.querySelector ('.cmp__person-share-btn').addEventListener ('click', share);
document.addEventListener ('click', handleBodyClick);

function share (e)
{
    e.stopPropagation ();
    cmp.classList.add ('share-active');
}

function handleBodyClick (e)
{
    cmp.classList.remove ('share-active');
}