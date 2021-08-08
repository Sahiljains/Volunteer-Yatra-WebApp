import { useEffect } from "react";
import leftButtonArrow from "../../assets/buttons/left-button-arrow.png";

const ShowMoreContent = ({
	title,
	para,
	content,
	showLine = true,
	extra = true,
}) => {
	return (
		<div className="p6 mx-4">
			<div className={`${extra ? "px-4" : ""}`}>
				<h3 className="text-semi-bold">{title}</h3>
				{para && <p className="p3 text-medium my-4">{para}</p>}
				{content}
			</div>
			{showLine && <div className="yellow-line my-5"></div>}
		</div>
	);
};

const KnowMore = ({ setMore }) => {
	useEffect(
		() =>
			window.scrollTo(0, document.getElementById("know-more").offsetTop - 10),
		[]
	);
	return (
		<div id="know-more">
			<p className="text-semi-bold mt-5" onClick={setMore}>
				<label className="cursor zoom-2">
					<img
						src={leftButtonArrow}
						alt=""
						style={{ width: "3.5%", transform: "rotate(180deg)" }}
					/>{" "}
					Back To Details
				</label>
			</p>
			<div className="yellow-line mt-0"></div>

			<ShowMoreContent
				title="The exchange"
				extra={false}
				para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
    laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor
    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat"
			/>

			<ShowMoreContent
				title="What is expected from you"
				content={
					<ul>
						<li>
							<span className="text-medium lead">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali-
							</span>
						</li>
						<li>
							<span className="text-medium lead">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali-
							</span>
						</li>
						<li>
							<span className="text-medium lead">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali-
							</span>
						</li>
					</ul>
				}
			/>

			<ShowMoreContent
				title="Requirments"
				content={
					<div className="row">
						<div className="col-6">
							<ul>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
							</ul>
						</div>
						<div className="col-6">
							<ul>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
							</ul>
						</div>
					</div>
				}
			/>

			<ShowMoreContent
				title="Things not part of this trip"
				content={
					<div className="row">
						<div className="col-6">
							<ul>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
							</ul>
						</div>
						<div className="col-6">
							<ul>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
								<li>
									<span className="text-medium lead">
										Lorem ipsum dolor sit ame
									</span>
								</li>
							</ul>
						</div>
					</div>
				}
			/>

			<ShowMoreContent
				title="More details"
				para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
    laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor
    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat"
			/>

			<ShowMoreContent
				title="Rules"
				showLine={false}
				content={
					<>
						<ul>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
							<li>
								<span className="text-medium lead">
									Lorem ipsum dolor sit ame
								</span>
							</li>
						</ul>
						<p className="p4 pt-2 text-medium lead mt-3">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
							modo consequat. Duis autem vel eum iriure dolor in hendrerit in
							vulputate velit esse molestie consequat, vel illum dolore eu
							feugiat
						</p>
					</>
				}
			/>
		</div>
	);
};

export default KnowMore;
