/**
 * 包含应用中所有接口请求的函数的模块
 * 每个函数的返回值都是Promise
 */
//  ed2a005a80557968760480a3ca6a833bac29dd28
import ajax from './ajax'
// 拿取issues
// export const getcontent = () => ajax( "https://api.github.com/repositories/87719463/issues", "get")

// https://api.github.com/repos/xiaowen66621/testBlog/issues
export const getcontent = () => ajax( "https://api.github.com/repos/xiaowen66621/testBlog/issues", "get")

// 
// export const getcontent = () => ajax( "https://api.github.com/repos/xiaowen66621/testBlog/issues", "get")
export const markdown = (text) => ajax( "https://api.github.com/markdown", {
  text
},"POST")

// https://api.github.com/repos/xiaowen66621/testBlog/issues?labels=bug
export const getTags = (text) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues?labels=${text}`,"get")


// 获取评论
export const getcommit = (number) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues/${number}/comments`,"get")


// 创建问题
export const createissues = ({title,body}) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues`,{
  title,
  body,
},"POST")

// 解锁问题
export const deleteissues = (number) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues/${number}/lock`,{
  // lock_reason: 'lock_reason'
},"PUT")

// 修改问题
export const updataissues = ({number,title,body}) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues/${number}`,{
  title,
  body
},"PATCH")


// 发表评论
export const sendcomment = (number,body) => ajax( `https://api.github.com/repos/xiaowen66621/testBlog/issues/${number}/comments`,{
  body
},"POST")

// 修改lables
export const addIssueLabels = (number,labels) => ajax(`https://api.github.com/repos/xiaowen66621/testBlog/issues/${number}`,labels,'POST')