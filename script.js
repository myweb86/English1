let time = 100
let timer
let currentWordIndex = 0
let lock = false
let words = ["cat","dog","apple","book","pen","school","teacher","student","airport","hospital",
"doctor","nurse","house","room","door","window","table","chair","water","food",
"bread","rice","meat","fruit","vegetable","car","bus","train","plane","bicycle",
"road","street","city","village","country","river","mountain","sea","lake","tree",
"flower","grass","sun","moon","star","sky","rain","wind","cloud","snow",
"morning","afternoon","evening","night","today","tomorrow","yesterday","week","month","year",
"happy","sad","angry","tired","hungry","thirsty","fast","slow","big","small",
"hot","cold","warm","cool","old","young","new","beautiful","ugly","clean",
"dirty","easy","difficult","important","interesting","boring","friend","family","parent","child",
"brother","sister","game","music","movie","story","language","science","history","computer",
"abandon","achieve","acquire","adapt","advance","analyze","ancient","approach","assume","attempt",
"benefit","challenge","complex","conclude","conduct","consider","constant","construct","contribute","create",
"culture","decline","define","demonstrate","determine","develop","discover","efficient","emerge","encourage",
"environment","establish","evidence","expand","explore","feature","function","generate","identify","impact",
"improve","increase","indicate","influence","maintain","measure","observe","occur","promote","require","abundant","accelerate","accessible","accompany","accurate","acknowledge","acquire","adequate","adjacent","administer",
"advocate","aggregate","allocate","ambiguous","amend","analogy","anticipate","apparent","appreciate","arbitrary",
"assemble","assess","assist","assume","attain","attribute","beneficial","bias","cease","coherent",
"coincide","collapse","commence","compensate","compile","conceive","concurrent","confine","confirm","conform",
"consent","constrain","consult","consume","contemporary","contradict","convene","converse","convert","cooperate",
"coordinate","core","correspond","crucial","deduce","deficient","demonstrate","derive","designate","detect",
"deviate","diminish","discrete","displace","display","dispose","distinct","distort","distribute","diverse",
"dominate","eliminate","emphasize","enable","encounter","enhance","ensure","equate","erode","establish",
"evaluate","evolve","exceed","exclude","expand","exploit","facilitate","fluctuate","formulate","generate",
"implement","imply","impose","incentive","incidence","incorporate","induce","inevitable","infer","inhibit","allocate","ambition","astonish","attitude","capable","collapse","commit","compete","conscious","consequence",
"convince","debate","decline","dedicate","emerge","enable","encounter","enhance","estimate","evident"]

let meanings = [
"con mèo","con chó","quả táo","quyển sách","cây bút","trường học","giáo viên","học sinh","sân bay","bệnh viện",
"bác sĩ","y tá","ngôi nhà","căn phòng","cánh cửa","cửa sổ","cái bàn","cái ghế","nước","thức ăn",
"bánh mì","cơm","thịt","trái cây","rau","xe hơi","xe buýt","tàu hỏa","máy bay","xe đạp",
"con đường","đường phố","thành phố","làng","đất nước","con sông","ngọn núi","biển","hồ","cây",
"hoa","cỏ","mặt trời","mặt trăng","ngôi sao","bầu trời","mưa","gió","mây","tuyết",
"buổi sáng","buổi chiều","buổi tối","ban đêm","hôm nay","ngày mai","hôm qua","tuần","tháng","năm",
"vui","buồn","tức giận","mệt","đói","khát","nhanh","chậm","to","nhỏ",
"nóng","lạnh","ấm","mát","già","trẻ","mới","đẹp","xấu","sạch",
"bẩn","dễ","khó","quan trọng","thú vị","nhàm chán","bạn","gia đình","cha mẹ","đứa trẻ",
"anh trai","chị em gái","trò chơi","âm nhạc","phim","câu chuyện","ngôn ngữ","khoa học","lịch sử","máy tính",
"từ bỏ","đạt được","thu được","thích nghi","tiến bộ","phân tích","cổ xưa","tiếp cận","giả định","cố gắng",
"lợi ích","thử thách","phức tạp","kết luận","tiến hành","xem xét","liên tục","xây dựng","đóng góp","tạo ra",
"văn hóa","suy giảm","định nghĩa","chứng minh","xác định","phát triển","khám phá","hiệu quả","xuất hiện","khuyến khích",
"môi trường","thiết lập","bằng chứng","mở rộng","khám phá","đặc điểm","chức năng","tạo ra","nhận diện","tác động",
"cải thiện","tăng lên","chỉ ra","ảnh hưởng","duy trì","đo lường","quan sát","xảy ra","thúc đẩy","yêu cầu","dồi dào","tăng tốc","có thể tiếp cận","đi cùng","chính xác","thừa nhận","thu được","đầy đủ","liền kề","quản lý",
"ủng hộ","tổng hợp","phân bổ","mơ hồ","sửa đổi","phép so sánh","dự đoán","rõ ràng","đánh giá cao","tùy ý",
"tập hợp","đánh giá","hỗ trợ","giả định","đạt được","quy cho","có lợi","thiên vị","chấm dứt","mạch lạc",
"trùng hợp","sụp đổ","bắt đầu","bù đắp","biên soạn","hình dung","đồng thời","giới hạn","xác nhận","tuân theo",
"đồng ý","hạn chế","tham khảo","tiêu thụ","đương đại","mâu thuẫn","triệu tập","trò chuyện","chuyển đổi","hợp tác",
"phối hợp","cốt lõi","tương ứng","quan trọng","suy ra","thiếu hụt","chứng minh","bắt nguồn","chỉ định","phát hiện",
"lệch khỏi","giảm bớt","riêng biệt","di dời","hiển thị","loại bỏ","khác biệt","bóp méo","phân phối","đa dạng",
"thống trị","loại bỏ","nhấn mạnh","cho phép","gặp phải","tăng cường","đảm bảo","đồng nhất","bào mòn","thiết lập",
"đánh giá","tiến hóa","vượt quá","loại trừ","mở rộng","khai thác","tạo điều kiện","dao động","hình thành","tạo ra",
"thực hiện","ám chỉ","áp đặt","động lực","tỷ lệ xảy ra","kết hợp","gây ra","không thể tránh","suy luận","ngăn chặn","phân bổ","tham vọng","làm kinh ngạc","thái độ","có khả năng","sụp đổ","cam kết","cạnh tranh","nhận thức","hậu quả",
"thuyết phục","tranh luận","giảm sút","cống hiến","xuất hiện","cho phép","gặp phải","tăng cường","ước tính","rõ ràng"
]
let types = [
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective",
"adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective","adjective",
"adjective","adjective","adjective","adjective","adjective","adjective","noun","noun","noun","noun",
"noun","noun","noun","noun","noun","noun","noun","noun","noun","noun",
"verb","verb","verb","verb","verb","verb","adjective","verb","verb","verb",
"noun","noun","adjective","verb","verb","verb","adjective","verb","verb","verb",
"noun","verb","verb","verb","verb","verb","verb","adjective","verb","verb",
"noun","verb","noun","verb","verb","noun","noun","verb","verb","noun",
"verb","verb","verb","verb","verb","verb","verb","verb","verb","verb","adj","v","adj","v","adj","v","v","adj","adj","v",
"v","v","v","adj","v","n","v","adj","v","adj",
"v","v","v","v","v","v","adj","n","v","adj",
"v","v","v","v","v","v","adj","v","v","v",
"v","v","v","v","adj","v","v","v","v","v",
"v","n","v","adj","v","adj","v","v","v","v",
"v","v","adj","v","v","v","adj","v","v","adj",
"v","v","v","v","v","v","v","v","v","v",
"v","v","v","v","v","v","v","v","v","v",
"v","v","v","n","n","v","v","adj","v","v","v","n","v","n","adj","v","v","v","adj","n",
"v","v","v","v","v","v","v","v","v","adj"
]
let questionCount = 1
let score = 0
let correctCount = 0
let wrongCount = 0
let correctIndex

function startGame(){

document.getElementById("menu").style.display="none"
document.getElementById("game").style.display="block"

timer = setInterval(countdown,1000)

nextQuestion()

}

function nextQuestion(){

let q = Math.floor(Math.random()*words.length)
currentWordIndex = q

document.getElementById("question").innerText = words[q]

let answers = []
answers.push(meanings[q])

while(answers.length < 4){

let r = Math.floor(Math.random()*meanings.length)

if(!answers.includes(meanings[r])){
answers.push(meanings[r])
}

}

answers = shuffle(answers)

let btn = document.getElementsByClassName("ans")

for(let i=0;i<4;i++){

btn[i].innerText = answers[i]

if(answers[i] == meanings[q]){
correctIndex = i
}

}

}

function checkAnswer(i){
if(lock) return
lock = true
let feedback = document.getElementById("feedback")

if(i == correctIndex){

score++
correctCount++

feedback.innerText = "✅ Correct!"
feedback.style.color = "green"
}else{

wrongCount++

feedback.innerText = 
"❌ Incorrect: " + meanings[currentWordIndex] + 
" (" + types[currentWordIndex] + ")"
feedback.style.color = "red"
}
questionCount++
document.getElementById("questionNumber").innerText = "Câu: " + questionCount

setTimeout(function(){

feedback.innerText = ""
nextQuestion()
lock = false

},2000)
document.getElementById("score").innerText = "Score: " + score
}

function shuffle(a){

for(let i=a.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1))

let temp=a[i]
a[i]=a[j]
a[j]=temp

}

return a

}

function countdown(){

time--

document.getElementById("timer").innerText = "Time: " + time

let width = time * 4.5
document.getElementById("time").style.width = width + "px"

if(time <= 0){

clearInterval(timer)

document.getElementById("game").style.display="none"
document.getElementById("result").style.display="block"

document.getElementById("finalScore").innerText = score
document.getElementById("correct").innerText = correctCount
document.getElementById("wrong").innerText = wrongCount

}

}

function restartGame(){

location.reload()

}