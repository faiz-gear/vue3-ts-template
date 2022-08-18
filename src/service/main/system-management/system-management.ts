import lyRequest from '@/service'

// 管理员修改密码
export function updatePasswordByAdmin(data: { ID: number; password: string }) {
  return lyRequest.get<any>({
    url: 'admin/users/update/password/' + data.ID,
    params: {
      password: data.password
    }
  })
}

// 获取所有权限点
export function getUserPerms() {
  return lyRequest.get<any>({
    url: '/admin/perms'
  })
}

// 获取角色详情
export function getRoleDetail(id: number) {
  return lyRequest.get<any>({
    url: '/admin/roles/' + id
  })
}
