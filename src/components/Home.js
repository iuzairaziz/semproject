const Home = (props) => {
  return (
    <>
      {" "}
      <div className="conatiner-fluid">
        <div className="row mt-3">
          <div className="col-12">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    src="https://images.zameen.com/common/resize.php?img=7/407/makki_complex_6121.jpg&d=1024"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://lh3.googleusercontent.com/proxy/B1nrMcBDxdlv4mEur_f8kbgbcamZL5-Baq4oi0PkkR-i-FqTaXMEa5sF4BtnFZicYLg_0i1R0hedX_bQxNbJ-Dq4XH_mu50lWOR84E38cIGYSr5CCpTGK4sKfg2zQMod-FQlXA6Jb8y0tx-hdURGyy3zjScf_8b8BFwPL3xtBHeQ4A"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src="https://images.zameen.com/w1024_h768/7/407/makki_complex_6122.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="jumbotron">
              <h1 className="display-4">About Us</h1>
              <p className="lead">
                Makki Complex is the latest venture of one of Lahore's most
                prestigious companies, Ismail Group, founded in 1995. The Mall
                has been designed on international standards by a team of
                foreign and local professionals. Makki Complex offers over 200
                brands, a Basement Parking, Food Court, Play Area, Supermarket,
                etc. all under one roof.
              </p>
              <p>
                Situated in the heart of Lahore on Mian Ferozrpur Road Next to
                Genral Hospital Lahore
              </p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUTEBIVFRUVFRUVFRUVFhUYFxYVFRUWFhUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi4lHyUtLS0rLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstKy0tLS0tLS0rLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABJEAACAQIDAwgHAwkHAwUBAAABAgADEQQSIQUxQQYTIlFhcYGRFDJSobHB0QdCkiMzYnKCorLh8CVDc4OzwtIkU/E1RGOj4hX/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgICAgIABAQHAAAAAAAAAAECERIhAzFBUQQyYfATFCKBQnGhscHR4f/aAAwDAQACEQMRAD8A6pRJiECp1sO8A+/T4SQodTqfG38U86jtBy3s6gGa7equp7eoeP1ghhmuLiwJAv8Ad1PFt0uVSqJkVgxJuzDde1gB12ude2XFeSWWn2qRooUDqCj5wR2hfelM96D5WmYxiDR5sMUaBxFM76I/ZZh9Y16B+7UXuKn4gSkGjgwyCi5zVE7qrD9ZPoYvQ1Pq1qfjmX4iVI8LXoKLY2c/3crfqup+ci2AqjfTbwF/hK8mlQjcSO4kQ0GxmQjeCO8RpZTH1R/eN4m/xkvT2PrBG70X6RaC2VYpb9KU76SeGZfgYucpHfTYdz3+IhS9hf0KsUsGlSJBD1F7Cqke4yXoyHdVXxDD5QoLKsUt+gngyHucfOM2AqD7hPdr8IYsLRVihHosN6kd4IkIhiiijwAaKK0QEAFeK8UYwAlmizwZjiAwoqGXMK5vKSiFWraNEs6BmvSN+E5/EuJcwG0lBK1PVb3fylXF4RBdlrUyva1j5cZpJ5K0RFU9lItFKpxS9vlFMbNaAiiOAt3Ej4SQQ8GPuPyvC8y3UT3a/CIi2+ADJccR5W+cnmkTGWAErRWmnToU0UGoMzEXtewAO69tSZFqtI/3fkxHxvKxJyM8SQlo811OP2lP+0RslP2mHeg+TQoLACPD8ynCoPFXHwBi9G6nQ/tW/itCmFgRJQowj8AD3Mp+BjnCv7DfhMKYWgMeOVI3i0aIY8UYCSgAooooAPHU9UjHgAZMXUG528zCenPxIPeqn5SrFePJipFv0oHfTpnwI+BjipTO+nbuc/O8p3jhoZMKLy0qR9sfhP0hl2ap9V/MWmcryzQrkSk15Qmn4B4rClDYiVis3Ma4akrdtpjO0UopMItsEVjgSL1AN8o19pqN2vwk2XRoFoyIW9UE905vGcoEpjNWdVXtIA9++XuTnLeli+cpYZT+TCFnIIBzFgAoOp9U9XCJWxN0bfoL8bDvImZtnLRps71AAoubAs3gLES61RiN8yNrUsykNqOokxNDRx7faCn3aNRhwY82t+219Ip5zjSVq1ADYCpUAA4AOwAinR+EjLNn0AIVarDcx8zGDj2R4E/MmSGXqbzB+UxNRFyd9u+wvuhEp0wbl7jqCm589B75XxFgtwT5fzgKNS8BMv4mtmN4C8s4OkGuXNlUXNt57BJviqW4Uh5tf4yqFZUDR80Ma1P2PJj87yOen7LfiH/GKgsjeODH/J9bjwU/MRwE9s+KfRjCgsaSViNxtFza/wDcXyf/AIyXNdTofG3xAhQWEXFONzt+Iyfpb8SD3qp+IgRRPWv41+sl6O/sk92vwj2GgvpPWqH9kD4Wi55eNNfAsPnBcw/sN+EyNuuGwpFjOnsMO5x81itT63Hgp+YgBJCAUG5tOD+an5Exejjg6/vD5QQEfNDQgwwbHcVP7Q+ZibAOBfKbdmvwghVMu4HFEHUwWLB2Z5WNL+1EAc246+esoM4G+JqnQ07HEfPKVXHLwPjwmBtzlVRoaVKq39hblvwgXk36GdaNqhAVJUg71Px01BmXjtrJboAJbeS1/dwnl20eXzm4w1LKD96obn8Cm3vM5fHY2tW/PVGfsOi/gFl900UJPsjJLo9J2ly7w9K4zc+2v5vUfivl984vavLPEVSebC0QfZ6TebC3umLRwhJl9dmy1CMROUmZTh6jZnZnY8WJJ8zPR/shwhSrXJ+8lP3M/wBZxpwtp3H2Ufn6wv8A3a/xGVJ2hRVM9JyzP2gmk1LSpikvMWaI+eNqi2Irf41X/UaKe4LyPwLXZsNTZmJZibklmJJJJPWYpouRGeDLwkhGAkhMDYklMMQG3H6GSxGC5tgy2ZSNxPHuBBg2G6NUHutI5J4KxVbCmvcZVULruF9TwuSTGbDqPWqa9QF7eNxIKwFiFN+/S/Xa3zhRhlH5xiCdbAXOvWZrGWSsQE014P5qfleNzY9tf3/+MKaScGb8I/5SPNL7R8V/nEBDmjwKn9oD42jik36P4l+slzA9oeTfSL0ce0v730gA3NP7J8NfhEUYb1byMf0b9JfP6yQwzdY/Ev1gMhcjeDHDQypU4MfBx8jJhav6Z8zHQAlfqhlxLe03mY4WpxXzQfSPdhvUfhA+UYiS4tvaJ79fjCLi+sA/sr9IJa68UU+f1hcXQXIHTS+hHUeyFsWgtPGrfVFPhb4QmPwy2DpoDw6jMtNNTLlLEXW2jL37j4G4gnemDVdAQsd3CjUgTnOU3KjmGNKlTL1bAhQbDpaDeLk7905bGrtKtRavV/I0QAb3ykhiAABcsSb9QvLjFMTZ3W1eVFCin5Sqmg0VrFu4Df4Tgdq8usxPMox0sC9go7Qu+/0m/gPs+wy1wld6lZg4V96LchGGoux0brEr8veTWHw+Gp8wioRWfNxbI98l2PSIFl37rzRwVbIy9GNhMdWrbMxdSq3SUsFK9Gw5nNpbje+s5bZ+xAQGqHQ62G/WdVsqlbZGO1vq3+gYHk7yZrYimrh0RDoL3LaaGyj6zO1Gy6swq+yUHqX8ZTbDWNrT12h9n1OmV51nq3IBt0ANeoa++W8Ds5KTqUpqgzqLgAEjMBqx1aZvmS0CjZ5VgeTuKexWiwB+89kHhntfwvN6jyQdQefqgW3rTBY92ZrW8jO+Vsp1Z/APbz3S69VcxDML3Nw2vxmUviG/oWoHIYPk7hETMUao16VucNxaoSNVsF4dU3ti0grMFXKouAAuVbg8ABaVdp451rhKYQglALKLm9txHfD7JqP6S4fdlJXuzWHzji23dnY/hJR48211f9jbleuJZMBVmrOJD0B0R4/GKPQ9Xz+MUQFASQjCSERQ3EePylbF0mL6A8N0tD1h3H5SOK0y26xHWhA8PmUhSupFxmHV1Xmjk46E/eZrWueAG6ZO0MSwqoMxtlBIubXuRqN01sOCU0A8iR+9vgvQmDJPXT8l+kdR1hD42/3Qpo9o8qf1iFHu8l+RjoRAJ+iv4j/ykua/R8jCCj2e76GSWl2e5vrCgsGKI9hvP+UfmB7Lf14Qopdg8nkhT/rX6QoLAc0vaPARxSXrP4R9ZYvbdmNt9m3eFo7VSCCGJU7wfeDCgsHTw9/UfXqItfukaGJdTqSRxB3HwgMVjUpnMCd+gUFjfeBYDfM3H7UvhmrIrL6wAIsbq5U3F9NQYWBpY1UDEggLvGo0HdvmBtLlXSo3VX5wn7qAML9vAGZmC2UcTVti67c3lLWBVRpb1jfdNrBV8Hhc2SmrEHTKMxsUX+8c6jNm3TSMU9ktvo5LaG2MXW1pJzYN9d//AORN7kHh6gpVTWYsxqA3JubZBMz0R6pJpU2ILORZQQAWJtm3G17eE6jk1s56KMKlrs17DgLAayNXooyErLR2u9V9FTCBj22qggAcSSBpKe3uUVGolenTov8AlihvUYAqaYCpkRb9R48Z0WP5O0a1fnailiEVbZiBYFjw75Yp7Lp07ZaSr1EAX87RvlpUhY27OQxe0do1yxVaiA2vkHNjo7rMbN74LD8jKjnPXqhSTc73bxJsJ3VNLnS/nLTYUg+sTMnySZSSRxu19jph9l4pabM2ZXYlgo15phoBuEsfZ8P+gQ/pMP3jNHlpTts7ED/4qh/+tpnfZxUvs0A+21vP+vKN7iLydm9tNeI3knjOHw2GxaYq9ViaTVQUOa4vzy2HWCBwnZX0HePjMrFOxKqQoAqqwJYAg5hxOhvYadgmLZceyS7Yy6Zt2nlLFfaoViptoePnOMxu2KvP82gBGdrsFD2AzC2l+Ngb6ggyW3cZUFepdgq5wB0BqAqkjOdNc1h2g9UwmsI22UqbNvaS0mrLWZygshGUXs4OotY29VT+1C7Nen6QyoLvlYuTe4sygKNd2/h1TEoYUYgI4emiKl6jsxyKc5UAHU3J3CdHhcCq1WcVFzsLlAvSCuxyktx1RvdOnjlJpUj0uVwXCrk7xevHil/nf0NEwNSEtBVFmzPJRKju8/jFM012FwGtqerrikjoIJISIkhAYvvDuPylTF1TzqrwJ3fsy2PW8JRqtesNNVO/stKXQidHF3x/NC4y4dWO6xz1GA7fuH3TW2VW6JzHNawzC53i9t15z+A12tW7MLhh5viDMjlPywahi6mHRnUoqFQMKlQHoKWOZsQlx0hw0txlqJDZ6GKyn7x8nhAB1+ZPznKbD5QnFA2ZmFOiGDMioGLEG6AMTlHSFmAOnG+nIcn+We0qoLCnnpsrAc3SHSYEaXY2Ftd/VAErPW1QHdY+F4LEVlXLZS5ZgoCKCRcE5iL7gAZ57WxVTGKaGaqKbsadY5Ka9DUsgYC+a2W9tNTqZLFbUNMZcNVcUqJygKU/Jlc1NgDlvvbr007pnOairLXHuj0jKtr9WugHwnJ1eXeHQZqtKsqlsobm6hUsCQRmCWGoO8jcZWwNeq181R26SkEtayEdIC1tDbvMpnZy5qVOgyAGnUarT56qC9VlYhmpq2q3OZt183G8OPlUpuLREotHoACE3uRpY7j5ynVpXYqN3Xff4Ty/BcoselWovP0yucsXN6gbMGJ5o2tYDLoAALHSbz8rX5ljnXOcwAFMg2ymzetvvw98qTj02VGE2rSOoxiOmQ0rBrmxPDosPnK77LZ8OaRYZmLXa2l3qFjp4zjtn8pMdz1FWGHem2UGojVGKK2gZ0dwbm/b2z0TA1MyIx3sqMbbrsATbzikmnQk7QKnySpol3d3Nt3qjTsGvVx4SzhNkItP82qnLqRrrb2mFzNTFVejruH85y20uUIoMi4irlFRyEAzXy6WuFHq9p65M2ggpSAUsaFKLVaygMabDLYam4IAGrEEXmhhsSHZ7G4DWG7doRY8R2zh9qsTZlYEBnADgsNRuygf+J0vJbnDSzVMliboUAAyWFrjge/WCY2qRv0957h84Osbi0kg1buH+6RYSZdgjB25tKpQNMU7dPPckXtly2tr+kZDa2OrHA0XVmzuwzZNCRlc2svcDp1Sztyoq1KeYqBlfVjaxzU7W69bfHhB7QrKMLQYlQufeQbWK1BuGuoPvk2dMONNRdPf/TFqGodl4znc+bLV0cuSBzBt6+tjv8YT7MjfZw/xG/iMPjKqvs/F5DcZauuu80mPHvt4Sp9lp/s7/Nf+KafwGPIq5Gqo7Bqmnlx7ffPNtr47NtC+bQV6agZuIKDdfrvO8xINhv3g/KeV7QpBNo5NbtXWqWNtL1AfeRI41bBaNpcTiPSaq0q9MnPUy0mqucqh9/N0zdf5zk+XuKJ2hW10BUaX4AX+cHWw5faVRQwGfE1FvlDWGdidD4ytyoYNjMSb7qpXvsZvCKizKbtHpX2b7TSng1DVVplijB3XMMtOtU5xRoekVYgTpcPUw7YksHvWFMU8mU9BUZi5z7iGvT0/RnmXJ8/9FR/zP4zO02V/6lU7m+CyXP8AVie1+Uj+XXJbtwb8eMV6uvv2dZIOJORMZ44FaS9Q4/GKPeKSMqAyQgxJgxDHG/wmZTa+JbsPyE003+A+c52ip9Lrfrj3hZXgRf2YP7UxJ0/M4UdugrHXznJ8qEoDaOKfE1WyhSFphiMrCjTZcvAk5GFv0hO12ThD6fi3OgtQXypknd+txnJcsuT618VWL1DkLXyhTcWRRcnN2A7pTprYkZXIvbxSslBKa5KlN0L3JNkV3uLab1taS5E7aq0tmEUGp84FqlFa1w1z0iG6JAGvhNXDbAIq03NSmaiIVzBXHRKsD0c9r5Sd5lHY3IqktPK9VnAV9LFASASmouRY23RWuiscad+Dm6XLnF0sI9JXsajls+RQyEjpEN1nqtp7ps8mMNW5unRUqucAsXUPcu4NzfeNQZzXKLZ2VKaLTbnqlRiQToq5jTQbtc7G9+oCek8n8PlNHuoD/SEfKlSSM1bbbK+28bR2dW9Hq4uszqiMSuHplbG9rE1AeB07pT5Q7Iwop08dWxdf8oqBebpIHtUpkjMvOAXy3B1nW7bwBqOXax1YglKLEWJtbNTJHnG9BLuBfQAC2VCLXI1VkYHcOEybSlaX8/utnLlrb/r90ee7Dw9HK3ozVKlFXKjOuRwctNr2VzaxLDf1dc2qOUKV5q1yL2vrbUbm01l7bWAyYmqm4Ar6oVR+ap8EUAeUq+jdrTHl43KTZ6XDy1BIHjctW2ekbg3DAsGGltDNnZfKmlhFVcS/N0rDJdKjuWvqLoDYAC+7jM5MAx3Bz3An4CX8HsjOSKtM5QoIz0kbUX9XnEI7dOIEOLhwpeCuTkUl9Tr6HKTD1lJpuSObSpqrDoVc3Nk3Gl8pNt9u+ecfaBiiK9F7ixVgpNtRziEgW42M6urelUKpoAMpKoi6IpVR0VAsANOqcrjsRRrUMOUK2UOrXAJVxkuRqbX0IM1unYo8f6dvsG9T8le4tztYgncLK2h8Z3XJdLYamcqjMim43tYWu3bpOcoYdVpjOBpzn3QR0rkX7e2dTyfC80Ah0FwQbaHMSdB1kmNPZnOKS0aib27h8WkGOsmN5/VHxMAz627DIk9ko5/lbYvSuyjSp6wvxp6SG0SPQMPdgBnGpFx6tThLW18MKpW99A1rFRvtfQg9QmRtTaFAUVwq1G52jZ1Ft5XnBqbW4H3dsmP6ujrXLGMIpvp/7JUKgOz8XYhrK+otb8yeqV/srb+zz/jP8RAbGxr1Nm4/OxbKa1r20BR9BaE+yg/9A3+NU/2mbNVCjlnPOeR1lXcf64zyzlZWJ2kgBICtTGm43qXIM9PrMMp/l1zyXlJU/tEnqrovkbTPh+YUuiNJR/8A0qvZWxR8bOL++PytwF8XUKlVU5SSdNSoN7DfcmVdsYk0cZXqBc35WtoTb1mYb+E0+WGJC4jUb0pHQA3/ACY7R1zenaInJUWdj4crgqfSVgDU1Um2tQ2tcCdds0/2k/c38KzjtmU1ODRjus9gcwtaoQdFYdc7DAH+0j3H/TBmUvm/c+g4Zyl8Kk1SXHKnffynWxjHiM1PBKznWKNV3xSRlcCSEiJIRDLOAQFjcX9XQd57JjrglFd3DXJZSbXtcAdYHVNTDuQTYkbt3jAJT6Z7TeUuifITDk89VOuuXifYErY3D2qOSou1/Iy7QHTY93wEMcLmJOUG539L6x9iujOoYPe3UvxBk8JRtTPXZprVsPYEdajwJv8AUQVLBnI2u63vP/mFAmec7b2PiTW52hzbaU7B1YFTTLFbMpN/XqHUaFuNhbUwdGtRamTTNRU5s2TLn6GQ5QDYE2S28anhOkxFErYw+GTpL3r8omMx3229ivoGMOls2XDheq4vVvbjuvFQ2vUVyw2fjCWt0R6Pdbe1epbW99J0VRza1z5mNTbXj5mGvRzfh9nI4mjVr4h3ak9HOy9GoULKAir0shI4Hd2TocJsegFAZcx4liflC4xL1Dw1GvgJRxOBqfcrEd6g/ST14OhdIqnbNROgqouXo7id2nEyD7aqnUlSevKLjxEx9sVOZYCs4JYXzEBQdddL90rUcWCd+hhbKpHQrtl+ziNQLa9hEzfRcOzX5hQSRfISt+8DfA85JUKl3EVsqkbWFSmwCmmwtf7xInQ7LpLrl7L3PV1HSZGzaehPgPnNjDpYCOK8ky6HxtN8x5soNNcwJHhZh2zCxODxJfMGpEi+81Bv32Ft3eZ0Nolw4OpHdE42xJ0crTwmKAqO1xUygKKTU8hy5spfnDf7x3TmcXszEmqar0ahLCzFcrXPTubLw6U9QbDKf6+sC2yUPEg9nzEcYNDlNNUed7OwrUNmbQ5xWQsKrDOCtxzb7r984vk7ywr4SkaVIUWQsX6YYtdgAbEONNOqe7rskBGUNfN1jd5mZGJ2Jl0KKw7VX3iXdLaIr0zzHEfaA9S3OYambX9Woy+sLHeDwmZiNtUKlU1alCsrGpzhy1UIuWzWsaY08Z6dX5N0G9bCUj282o94EzMRyNwbf+3Kn9GpUHuzWiTgvA3GXs4DauMwlapUqH0lDUZmICUXALG9heotxNTau18HiCCajJZEX8pRcnoqBe9OoeqbdfkBhjqrV07AyEe9L++UK/2ej7mII/Wpg+8MJVwZLjIbA7Wwq0BTWvRJGfR0xSLq2YWOTtN+4TqNjbSoVceDSq0HzA2yu/OG1PXoEAcD4Ti6v2e4j+7q0m7yy/IzQ5McidpYfGUayUVZVcZ2SpTNqbdFzZiD6pO4XhhB7R0L4vmjHC9U1+z7PWQIxEOaR4qR4/yiKDqPmPpEzEzqw1MUrbQx4Soy23W3kcQDHkFDCSEiJKAyVNgCb9kcuA24nuBj0OP9cIQb5QiFOpqei2vZ2S3Rdj90+YgV3y5TPVATEXYn1D1a67ozYkgWK2uRprr3W3w1+0x98ZJl4mpmtu38Af6MJhxqPCGxGHG/Uf17vCAGCbSy36u6IYWqNZLLbWBJYGx3jgbk/UyfPDj7ohUM6XJMMm7UXkUIJ0Phx8obm4xmdjcGHOoHjMetyYoMb82AeteifMTpykgUhQ7OSfkqb9Gu47CEI9wBkqHJyorXNZT/AJZv5551WSLJFQWVcFhMqBb7uPWev3y/TS0jSEMBGJjMuh4aSsK5Gl90sut5j7RwTn1GseBibaGjQ9JMMmLE5U4jFU/Wp84OtDY+R+sccoVHr06intRviARFkGJ1nPiQeuJzJ5RJwDHuR/pLGB2gapvlZR2ggnwMeYYmuVB3SrVTXh5S0lTTdA1N8QytUpC+4SNSivVLLDWNUXWAFYYYW3w+Dw9qik7gdbb5NV0hFXpCBdJo0Oc6mMfnj7XxlaNLsyolVqG+higzFJHRgDGH/tv4lPkxkvSX4Ux4v9FMjmhJFl0XcFcrcgA34G/vsIe0r4I7x1WPnLKiWnoljoNYcQaCEjESjgyIkgYCETCKe+DzSYJgA7IDvFx2yD4deAsRu4/zt3EQoJ644PbARTag3ULXvpbztw98dc+Y66jfrf3W+Ql2/bGamD61j3wAqjEddu8X9/AecXOr1279PfuMIcKL3BPjr5HePOVmo2J6LHtB18ban3wGWFS8Y0pVD2PRA7bEkeIGo8VhaeMPEAj+uIv7wJSoWwqLCyouJHd7x5iHpMCNDJGFAkSsbNHvGIgacgaA6oa8UVDAejr1CIUR1Q9o0AsEVleoustkQLiSMrsusZxrDMNZF1gMiu6EU6iMi6SWXWMu9BbxjGjGMzHigyY8QGGtM9kKtE9fuhFEIBILHw6ZSTff8oYNArvhBGhB6ZhAxgVkwZQguaPmMHmjhoCCZjEsiDFeABY4MgJK0BExJCQAj2jAnJIQDeDjwEDq0w28X+PnINhRbrPAk6/i3w1o7mMDPckG5Wx67Zh5jX3RlqHW27s1Hmuo8RLshUw6nUjXrGh8xEMq06x67/vDzXUeIhVxQ6vFekPdqPKMuHF9Tfv9YdzC0hVKj1lbsZv+Q185S6AspWB3EHukiZSarxCj9b1h5jWROIbeD5WYeWhETCi6WjIZTTFE7xfuP+06wtOuDx8DoffJsdFomDYx4NogHaRYR7xiYDJUxJFYMSWaUgHvGMa8YmIQxEeQvFAZRWEO6KKZookqyYEUUoRNZMRooxEhJCKKADgx40UAJq0mGiigIcGIGPFGIa8e8UUAFePGijAbLJtoIooABJjXiihYAalBSb2setdD7pXrUW36N3ix8xFFG+gQDONx7rN0te/fCgHdu/eFvHd4RRSCgqIeu3du/CYXXjrFFAAa4kE2vr3GTzXiigArR4oo0MUixiigIheKKKID/9k="
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">For Rent</h5>
                    <p className="card-text">
                      Shops and offices available for rent on all levels
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">For Sale</h5>
                    <p className="card-text">
                      Shops and offices available for rent on all levels
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Home;
