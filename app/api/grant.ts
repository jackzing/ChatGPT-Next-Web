interface ResponseData {
  code: number;
  data: any;
  message: string;
}

export async function grantCode(accessCode: string): Promise<ResponseData> {
  let params: any = {
    code: accessCode,
    key: "Waeh8yehaev7Phee",
  };

  // 将参数对象转换为查询字符串
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join("&");

  try {
    let url = `https://www.11meigui.com/chatauth.php?${queryString}`;
    console.log("[grantCode]", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ResponseData = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation: ",
      error,
    );
    return {
      code: 500,
      data: null,
      message: "Fetch operation failed",
    };
  }
}
