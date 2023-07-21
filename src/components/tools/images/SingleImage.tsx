import {FC} from 'react'

const SingleImage: FC = () => {
  const onDropImg = (e: any) => {
    e.preventDefault();
    e.target.classList.remove("hover");

    var files = e.dataTransfer.files;
    if (files.length > 0) {
      var file = files[0];
      if (file.type.match(/image.*/)) {
        var reader = new FileReader();

        reader.onload = function (event: any) {
          e.target.style.backgroundImage = `url('${event.target.result}')`;
        };

        reader.readAsDataURL(file);
      } else {
        e.target.innerHTML = "Only images"
      }
    }
  };
  return (
    <div className='w-full h-full bg-cover bg-center bg-no-repeat' onDrop={(e) => onDropImg(e)}>

    </div>
  )
}

export default SingleImage