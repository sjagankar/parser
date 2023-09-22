import { formatMessage } from '@/utils/locale';

export function getFileName(filename) {
  return filename.replace(/[^a-zA-Z0-9]/g, '_').replace(/_([^_]*)$/, '.$1');
}

export function getIndexFromObjArray(value, arr, prop) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
}

export function addHttps(link) {
  let url = '#';
  if (link !== undefined && link !== null && link.trim() !== '') {
    url = link.indexOf('://') === -1 ? 'https://' + link : link;
  }
  return url;
}

export function inIframe() {
  var url =
    window.location != window.parent.location
      ? document.referrer
      : document.location.href;

  if (url && url.includes('app.cvviz.com')) {
    document.body.style.zoom = '60%';
    return false;
  }
  try {
    console.log(' window.self !== window.top');
    console.log(window.self !== window.top);
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export function getLocationString(j) {
  if (parseInt(j.is_remote_job) === 1) {
    return (
      formatMessage({
        id: 'jobdetails.remotejob',
        defaultMessage: 'Remote Job',
      }) +
      ', ' +
      j.country
    );
  } else {
    return j.city + ', ' + j.state + ', ' + j.country;
  }
}

export function getExperienceString(minExp, maxExp) {
  let min = parseInt(minExp);
  let max = parseInt(maxExp);
  // const maxExpLabel = formatMessage({
  //   id: 'jobdetails.maxExpLabel',
  //   defaultMessage: 'Max Exp',
  // });
  const minExpLabel = formatMessage({
    id: 'jobdetails.minExpLabel',
    defaultMessage: 'Min Exp',
  });
  const yearLabel = formatMessage({
    id: 'applyjobs.year',
    defaultMessage: 'Year',
  });
  const yearsLabel = formatMessage({
    id: 'applyjobs.years',
    defaultMessage: 'Years',
  });
  const anyExperienceLabel = formatMessage({
    id: 'jobdetails.anyexperience',
    defaultMessage: 'Any Experience',
  });

  if (min === -1 && max !== 99) {
    return `0 - ${max} ${max === 1 ? yearLabel : yearsLabel}`;
  }
  if (min !== -1 && max === 99) {
    if (min === 0) return anyExperienceLabel;
    return `${minExpLabel} ${min} ${min === 1 ? yearLabel : yearsLabel}`;
  }
  if (min === -1 && max === 99) return anyExperienceLabel;
  return `${min} - ${max} ${yearsLabel}`;
}

export function findObjectInArray(prop, nameKey, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i][prop] === nameKey) {
      return myArray[i];
    }
  }
}

export function distinctValuesOfKeyInArr(array, key) {
  return array
    .map((item) => (item[key] !== null ? item[key].trim() : ''))
    .filter(
      (value, index, self) =>
        self.indexOf(value.trim()) === index && value != null && value != '',
    );
}

export function searchInObject(object, toSearch) {
  for (var key in object) {
    if (
      object[key] !== null &&
      typeof object[key] === 'string' &&
      isFullTextSearchContains(object[key], toSearch)
    ) {
      return true;
    }
  }
  return false;
}

export function isFullTextSearchContains(yourstring, searchValue) {
  var substrings = searchValue.split(/[,]+/);
  var length = substrings.length;
  while (length--) {
    if (
      yourstring
        .toUpperCase()
        .indexOf(substrings[length].toUpperCase().trim()) != -1
    ) {
      return true;
    }
  }
  return false;
}

export function changeColorAlpha(color, opacity) {
  if (color.length > 7) color = color.substring(0, color.length - 2);

  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
  let opacityHex = _opacity.toString(16).toUpperCase();

  // opacities near 0 need a trailing 0
  if (opacityHex.length == 1) opacityHex = '0' + opacityHex;

  return color + opacityHex;
}

export function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}


export function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
  }


export function isEmpty(value) {
  return value === undefined || value === null || value === '' || value.trim().length===0;
}
  
// function getJobTitle(t){
//   let title = t.split("_");
//   title.splice(0,2);
//   title = title.join(" ");
//   return titleCase(title);
// }
// function getBrandTitle(t){
//   let title = t.split("_");
//   title = title.join(" ");
//   return titleCase(title);
// }




// function getMeta(url){
//     const arr = url.split('/').filter(n => n);
//     let siteName = 'CVViZ';
//     let title = 'Job Openings'
//     if(arr.length>0){
//     if(arr.length>1 && arr.includes('customers')){
//       siteName =  getBrandTitle(titleCase(arr[1]));
//        title = arr.length>2 ? `Apply for ${getJobTitle(arr[2])} job at ${siteName}` : `Job Openings at ${siteName}`;
//     }else{
//       siteName = getBrandTitle(titleCase(arr[0]));
//       title = arr.length>1 ? `Apply for ${getJobTitle(arr[1])} job at ${siteName}` : `Job Openings at ${siteName}`;
//     }
//   }
//     return {
//       title,
//       siteName
//     };
// }

export function getMetaQuery(url){
  const arr = url.split('/').filter(n => n);
  let context = 'employer';
  let page = 'home';
  let careerPageId = '';
  let jobId = '';
  if(arr.length>0){
  if(arr.length>1 && arr.includes('customers')){
     context =  'customer';
     page = 'home';
     careerPageId = arr[1];
     if(arr.length>2){
      page = 'job';
      jobId = arr[2].split("_")[1];
     }
  }else{
    careerPageId = arr[0];
    if(arr.length>1){
      page = 'job';
      jobId = arr[1].split("_")[1];
     }
  }
}
  return {
    context,
    page,
    careerPageId,
    jobId
  };
}


export function getRandomTagColor() {
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  return colors[Math.floor(Math.random() * 10) + 1];
}

