class LinkListNode {
  value: string | number
  next?: LinkListNode
  constructor(value: string | number) {
    this.value = value
    this.next = undefined
  }
}

class LinkList {
  head?: LinkListNode
  length: number

  constructor() {
    this.head = undefined
    this.length = 0
  }

  append(value: string | number) {
    const node = new LinkListNode(value)
    let p = this.head
    if (this.length === 0 && !p) {
      this.head = node
      this.length++
    } else {
      while (p?.next) {
        p = p.next
      }
      if (p) {
        p.next = node
        this.length++
      }
    }
    return this
  }
}

function createLinkList(n: number) {
  const linkList = new LinkList()
  for (let index = 0; index < n; index++) {
    linkList.append(index)
  }

  return linkList.head
}

let workProgress = createLinkList(1000)

function performUnitOfWork(unitOfWork: LinkListNode) {
  for (let i = 0; i < 999999; i++) {}
  console.log('start perform unit of work', performance.now(), unitOfWork.value)
  workProgress = unitOfWork.next
}

function workLoopSync() {
  while (workProgress) {
    performUnitOfWork(workProgress)
  }
}
