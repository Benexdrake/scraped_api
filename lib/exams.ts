import cfs_c02 from '@/public/exam/aws-cfs-c02.json'
import saa_c03 from '@/public/exam/aws-saa-c03.json'
import az_900 from '@/public/exam/az-900.json'


export const exams = [
    {'id': 'cfs-c02', 'exam':cfs_c02},
    {'id': 'saa-c03', 'exam':saa_c03},
    {'id': 'az-900', 'exam':az_900}
]

export const exam_infos = [
    {'id': 'cfs-c02', 'name':cfs_c02.name, 'description':cfs_c02.description, 'level': cfs_c02.level, 'type':cfs_c02.type},
    {'id': 'saa-c03', 'name':saa_c03.name, 'description':saa_c03.description, 'level': saa_c03.level, 'type':saa_c03.type},
    {'id': 'az-900', 'name':az_900.name, 'description':az_900.description, 'level': az_900.level, 'type':az_900.type}
]

